// Simple test script to verify the statistics API endpoint
import axios from 'axios';

const testStatsAPI = async () => {
  try {
    console.log('Testing statistics API...');
    
    const response = await axios.get('http://localhost:5000/api/stats');
    
    console.log('✅ Statistics API Response:');
    console.log('Active Users:', response.data.activeUsers);
    console.log('Unique Languages:', response.data.uniqueLanguages);
    console.log('Total Messages:', response.data.totalMessages);
    
  } catch (error) {
    console.error('❌ Error testing statistics API:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
};

// Run the test
testStatsAPI();
