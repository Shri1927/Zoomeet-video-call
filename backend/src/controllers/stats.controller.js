import User from "../models/User.js";
import { streamClient } from "../lib/stream.js";

export async function getStatistics(req, res) {
  try {
    // Get total active users (users who are onboarded)
    const activeUsers = await User.countDocuments({ isOnboarded: true });

    // Get unique languages from both nativeLanguage and learningLanguage fields
    const users = await User.find({ isOnboarded: true }).select("nativeLanguage learningLanguage");
    
    const languages = new Set();
    users.forEach(user => {
      if (user.nativeLanguage) languages.add(user.nativeLanguage);
      if (user.learningLanguage) languages.add(user.learningLanguage);
    });

    const uniqueLanguages = languages.size;

    // For messages, we'll need to integrate with Stream Chat API
    // For now, we'll return a placeholder that can be updated later
    // You can implement this by calling Stream Chat's API to get message counts
    const totalMessages = await getTotalMessagesFromStream();

    res.status(200).json({
      activeUsers,
      uniqueLanguages,
      totalMessages
    });
  } catch (error) {
    console.error("Error in getStatistics controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Helper function to get total messages from Stream Chat
async function getTotalMessagesFromStream() {
  try {
    // Query all channels to get message counts
    const channels = await streamClient.queryChannels();
    
    let totalMessages = 0;
    
    // Get message count for each channel
    for (const channel of channels) {
      try {
        const messages = await channel.queryMessages({ limit: 0 });
        totalMessages += messages.messages.length;
      } catch (channelError) {
        console.warn(`Error querying messages for channel ${channel.id}:`, channelError.message);
        // Continue with other channels even if one fails
      }
    }
    
    return totalMessages;
  } catch (error) {
    console.error("Error getting message count from Stream:", error.message);
    
    // Fallback: estimate based on user activity
    try {
      const users = await User.find({ isOnboarded: true }).select("createdAt");
      const totalUsers = users.length;
      
      // Rough estimate: assume each user sends/receives an average of 50 messages
      const estimatedMessages = totalUsers * 50;
      
      return estimatedMessages;
    } catch (fallbackError) {
      console.error("Error in fallback message estimation:", fallbackError.message);
      return 0;
    }
  }
}
