import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Coffee, DollarSign, Gift, Star, Users, Target, TrendingUp } from 'lucide-react';

export default function MonetizationSection() {
  const supportOptions = [
    {
      icon: Coffee,
      title: "Buy Me a Coffee",
      description: "Support my work with a small donation. Every coffee helps fuel more content!",
      amount: "$5",
      color: "from-amber-500 to-orange-500",
      popular: false
    },
    {
      icon: Heart,
      title: "Monthly Supporter",
      description: "Become a monthly supporter and get exclusive content and early access to posts.",
      amount: "$10/month",
      color: "from-pink-500 to-red-500",
      popular: true
    },
    {
      icon: Star,
      title: "Premium Supporter",
      description: "Get personalized content, one-on-one consultation, and priority support.",
      amount: "$25/month",
      color: "from-purple-500 to-indigo-500",
      popular: false
    }
  ];

  const monetizationStrategies = [
    {
      icon: DollarSign,
      title: "Affiliate Marketing",
      description: "Earn commissions by promoting products you genuinely use and recommend.",
      tips: ["Choose relevant products", "Be transparent", "Focus on value", "Build trust"]
    },
    {
      icon: Gift,
      title: "Digital Products",
      description: "Create and sell digital products like e-books, courses, or templates.",
      tips: ["Solve real problems", "High-quality content", "Good pricing strategy", "Marketing"]
    },
    {
      icon: Users,
      title: "Sponsorships",
      description: "Partner with brands for sponsored content and collaborations.",
      tips: ["Build audience first", "Maintain authenticity", "Fair pricing", "Long-term relationships"]
    },
    {
      icon: TrendingUp,
      title: "Ad Revenue",
      description: "Monetize through display ads, Google AdSense, or other ad networks.",
      tips: ["High traffic needed", "Good user experience", "Strategic placement", "Mobile optimization"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support My Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creating quality content takes time and effort. Your support helps me continue sharing 
              valuable insights and building this community. Here's how you can help!
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className={`relative ${option.popular ? 'ring-2 ring-blue-500' : ''} hover:shadow-lg transition-shadow`}>
                  {option.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <div className="text-2xl font-bold text-gray-900">{option.amount}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-6">
                      {option.description}
                    </CardDescription>
                    <Button className={`w-full bg-gradient-to-r ${option.color} hover:opacity-90`}>
                      Support Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Monetization Guide */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">How to Monetize Your Blog</h3>
              <p className="text-lg text-gray-600">
                Learn from my experience - here are proven strategies to earn money from blogging
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {monetizationStrategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                          <Icon className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{strategy.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {strategy.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-900">Key Tips:</h4>
                        <ul className="space-y-1">
                          {strategy.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm text-gray-600 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Card className="bg-white/90 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Start Your Monetization Journey</h4>
                  <p className="text-gray-600 mb-4">
                    Remember: Focus on providing value first. Build an audience that trusts you, 
                    and monetization will follow naturally. Quality content + engaged audience = sustainable income.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                    <span>✓ Build audience first</span>
                    <span>✓ Provide genuine value</span>
                    <span>✓ Stay authentic</span>
                    <span>✓ Be patient & consistent</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Support!</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every contribution, whether it's reading my posts, sharing them with others, or providing financial support, 
              helps me continue creating valuable content. I'm grateful to have you as part of this journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}