import { Link } from "react-router";
import { ShipWheelIcon, UsersIcon, MessageCircleIcon, GlobeIcon, StarIcon, ArrowRightIcon } from "lucide-react";
import { useStatistics } from "../hooks/useStatistics";

const LandingPage = () => {
  const { data: statistics, isLoading, error } = useStatistics();

  // Format numbers for display
  const formatNumber = (num) => {
    if (!num) return "0";
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M+`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K+`;
    return num.toString();
  };

  // Generate default profile pictures using the same system as profile creation
  const getDefaultProfilePic = (seed) => {
    const idx = (seed % 100) + 1; // Ensure it's between 1-100
    return `https://avatar.iran.liara.run/public/${idx}.png`;
  };

  return (
    <div className="min-h-screen" data-theme="forest">
      {/* Navigation */}
      <nav className="backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <ShipWheelIcon className="size-8 text-primary" />
              <span className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                FluentFriends
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-base-content hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-base-content hover:text-primary transition-colors">
                How it Works
              </a>
              <a href="#testimonials" className="text-base-content hover:text-primary transition-colors">
                Testimonials
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/login" className="btn btn-ghost">
                Sign In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Connect with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Language Partners
                  </span>{" "}
                  Worldwide
                </h1>
                <p className="text-lg text-base-content/70 max-w-lg">
                  Practice conversations, make friends, and improve your language skills together. 
                  Join thousands of learners building fluency through real conversations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="btn btn-primary btn-lg">
                  Start Learning Now
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                <Link to="/login" className="btn btn-outline btn-lg">
                  Sign In
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {isLoading ? (
                      <span className="loading loading-dots loading-sm"></span>
                    ) : error ? (
                      "0"
                    ) : (
                      formatNumber(statistics?.activeUsers)
                    )}
                  </div>
                  <div className="text-sm text-base-content/70">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {isLoading ? (
                      <span className="loading loading-dots loading-sm"></span>
                    ) : error ? (
                      "0"
                    ) : (
                      formatNumber(statistics?.uniqueLanguages)
                    )}
                  </div>
                  <div className="text-sm text-base-content/70">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {isLoading ? (
                      <span className="loading loading-dots loading-sm"></span>
                    ) : error ? (
                      "0"
                    ) : (
                      formatNumber(statistics?.totalMessages)
                    )}
                  </div>
                  <div className="text-sm text-base-content/70">Messages</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-full max-w-md">
                  <img 
                    src="/i.png" 
                    alt="Language learning illustration" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-content p-3 rounded-full shadow-lg">
                  <MessageCircleIcon className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-content p-3 rounded-full shadow-lg">
                  <UsersIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-base-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose FluentFriends?</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Our platform makes language learning fun, social, and effective through real conversations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <UsersIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Find Language Partners</h3>
                <p className="text-base-content/70">
                  Connect with native speakers and fellow learners who share your interests and learning goals.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircleIcon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Real Conversations</h3>
                <p className="text-base-content/70">
                  Practice with real-time chat and video calls. Learn natural expressions and cultural nuances.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="card-body text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <GlobeIcon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Global Community</h3>
                <p className="text-base-content/70">
                  Join a worldwide community of language learners. Make friends across different cultures and countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary text-primary-content rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Create Your Profile</h3>
              <p className="text-base-content/70">
                Sign up and tell us about your native language and the languages you want to learn.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-secondary text-secondary-content rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Find Partners</h3>
              <p className="text-base-content/70">
                Browse profiles and connect with language partners who match your interests and schedule.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-accent text-accent-content rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Start Learning</h3>
              <p className="text-base-content/70">
                Begin chatting and practicing together. Track your progress and celebrate milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-base-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Users Say</h2>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
              Real stories from language learners around the world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-base-content/70">
                  "I've improved my Spanish so much through conversations with native speakers. The community is amazing!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={getDefaultProfilePic(1)} alt="Sarah M." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-sm text-base-content/70">English → Spanish</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-base-content/70">
                  "FluentFriends helped me make friends while learning Japanese. The cultural exchange is incredible!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={getDefaultProfilePic(2)} alt="Alex K." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Alex K.</div>
                    <div className="text-sm text-base-content/70">English → Japanese</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-warning fill-current" />
                  ))}
                </div>
                <p className="text-base-content/70">
                  "The video calls feature is fantastic. I can practice pronunciation and see facial expressions!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={getDefaultProfilePic(3)} alt="Maria L." className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Maria L.</div>
                    <div className="text-sm text-base-content/70">Spanish → French</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to Start Your Language Journey?</h2>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                Join thousands of learners who are already improving their language skills through real conversations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn btn-primary btn-lg">
                Get Started Free
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-200 border-t border-base-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShipWheelIcon className="size-6 text-primary" />
                <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  FluentFriends
                </span>
              </div>
              <p className="text-sm text-base-content/70">
                Connect with language partners worldwide and improve your skills through real conversations.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Product</h3>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-base-content/70 hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="block text-base-content/70 hover:text-primary transition-colors">
                  How it Works
                </a>
                <Link to="/signup" className="block text-base-content/70 hover:text-primary transition-colors">
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-base-content/70 hover:text-primary transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-base-content/70 hover:text-primary transition-colors">
                  Contact Us
                </a>
                <a href="#" className="block text-base-content/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Community</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-base-content/70 hover:text-primary transition-colors">
                  Blog
                </a>
                <a href="#" className="block text-base-content/70 hover:text-primary transition-colors">
                  Success Stories
                </a>
                <a href="#" className="block text-base-content/70 hover:text-primary transition-colors">
                  Language Exchange Tips
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-base-300 mt-8 pt-8 text-center text-sm text-base-content/70">
            <p>&copy; 2024 FluentFriends. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
