import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search, TrendingUp, Code, Database } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Updated blog posts with Shakir's expertise
const blogPosts = [
  {
    id: 1,
    title: "Building Responsive Web Applications with React and Vue.js",
    excerpt: "A comprehensive guide to creating modern, responsive web applications using React and Vue.js. Learn best practices, performance optimization, and real-world implementation strategies.",
    content: `As a frontend developer with 2+ years of experience, I've worked extensively with both React and Vue.js to create responsive, high-performance web applications.

## Why Choose React or Vue.js?

Both frameworks offer excellent solutions for modern web development, but each has its strengths:

### React Benefits:
- **Large Ecosystem**: Extensive library support and community
- **Component Reusability**: Build once, use everywhere
- **Performance**: Virtual DOM for efficient updates
- **Industry Adoption**: Widely used by top companies

### Vue.js Benefits:
- **Gentle Learning Curve**: Easy to pick up for beginners
- **Template Syntax**: Familiar HTML-like templates
- **Two-way Data Binding**: Simplified state management
- **Progressive Framework**: Can be adopted incrementally

## Best Practices I Follow

1. **Component Architecture**: Create reusable, modular components
2. **State Management**: Use Redux (React) or Vuex (Vue) for complex apps
3. **Performance Optimization**: Implement lazy loading and code splitting
4. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
5. **Testing**: Unit tests and integration tests for reliability

## Real-World Implementation

In my projects at Tech Ucreation and Optimal, I've successfully delivered:
- E-commerce platforms with complex state management
- Data visualization dashboards using D3.js integration
- Progressive Web Apps (PWAs) with offline functionality
- Multi-language applications with internationalization

## Conclusion

Whether you choose React or Vue.js, focus on writing clean, maintainable code and following modern development practices. Both frameworks can deliver exceptional user experiences when implemented correctly.`,
    category: "Web Development",
    date: "2024-01-20",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Data Science for Web Developers: Bridging Two Worlds",
    excerpt: "How combining data science skills with web development creates powerful, data-driven applications. Learn to integrate analytics, visualization, and machine learning into your web projects.",
    content: `As someone who works in both data science and web development, I've discovered the incredible power of combining these two fields.

## The Intersection of Data and Web

Modern web applications are increasingly data-driven. Users expect personalized experiences, real-time analytics, and intelligent features powered by data science.

## Key Areas Where They Merge

### 1. Data Visualization
Creating interactive dashboards and charts using:
- **D3.js**: For custom, complex visualizations
- **Chart.js**: For standard charts and graphs  
- **Plotly**: For scientific and statistical plots
- **React/Vue components**: For reusable chart components

### 2. Real-time Analytics
Implementing live data processing:
- WebSocket connections for real-time updates
- Server-sent events for streaming data
- Client-side data processing with Web Workers
- Integration with analytics APIs

### 3. Machine Learning Integration
Bringing ML models to the web:
- **TensorFlow.js**: Run models directly in the browser
- **API Integration**: Connect to Python ML services
- **Edge Computing**: Process data closer to users
- **Predictive Features**: Implement recommendation systems

## Tools I Use Daily

**Frontend Technologies:**
- React/Vue.js for interactive interfaces
- TypeScript for type-safe data handling
- WebGL for high-performance visualizations

**Data Processing:**
- Python for data analysis and ML
- Pandas and NumPy for data manipulation
- Jupyter notebooks for experimentation

**Integration:**
- REST APIs for data communication
- GraphQL for efficient data fetching
- WebSockets for real-time features

## Real Project Examples

At my previous roles, I've built:
- **Sales Dashboard**: Real-time revenue tracking with predictive analytics
- **User Behavior Analysis**: Heat maps and user journey visualization
- **Inventory Management**: ML-powered demand forecasting
- **A/B Testing Platform**: Statistical analysis with web interface

## Getting Started

1. **Learn the Basics**: Start with JavaScript data manipulation
2. **Visualization Libraries**: Master at least one charting library
3. **API Integration**: Practice connecting to data sources
4. **Statistical Concepts**: Understand basic statistics and probability
5. **Build Projects**: Create data-driven web applications

## Conclusion

The combination of data science and web development is incredibly powerful. It allows you to create applications that not only look great but also provide intelligent, data-driven value to users.`,
    category: "Data Science",
    date: "2024-01-15",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "WordPress Development: Beyond Themes and Plugins",
    excerpt: "Advanced WordPress development techniques for creating custom solutions. Learn about custom post types, advanced ACF usage, and performance optimization strategies.",
    content: `WordPress powers over 40% of the web, but many developers only scratch the surface of its capabilities. Let me share advanced techniques I've learned through professional WordPress development.

## Moving Beyond Basic WordPress

While themes and plugins are great starting points, custom WordPress development opens up unlimited possibilities.

## Advanced Development Techniques

### 1. Custom Post Types and Fields
Creating specialized content structures:
- **Custom Post Types**: For portfolios, products, events
- **Advanced Custom Fields**: Complex data relationships
- **Meta Boxes**: Custom admin interfaces
- **Taxonomies**: Organized content categorization

### 2. Performance Optimization
Techniques I implement in every project:
- **Caching Strategies**: Object caching, page caching, CDN
- **Database Optimization**: Query optimization, indexing
- **Asset Management**: Minification, compression, lazy loading
- **Image Optimization**: WebP conversion, responsive images

### 3. Security Hardening
Protecting WordPress installations:
- **Input Validation**: Sanitizing all user inputs
- **SQL Injection Prevention**: Using prepared statements
- **Authentication**: Two-factor authentication, strong passwords
- **File Permissions**: Proper server configuration

## Real-World Applications

In my WordPress projects, I've developed:

### E-commerce Solutions
- Custom product configurators
- Advanced filtering systems
- Integration with payment gateways
- Inventory management systems

### Corporate Websites
- Multi-language implementations
- Custom user roles and permissions
- Advanced SEO optimization
- Integration with CRM systems

### Performance Results
Through optimization techniques:
- **Page Load Times**: Reduced from 5s to under 2s
- **Core Web Vitals**: Achieved excellent scores
- **Server Resources**: Reduced CPU usage by 40%
- **User Experience**: Improved bounce rates significantly

## Development Workflow

My approach to WordPress development:

1. **Planning Phase**
   - Requirements analysis
   - Database schema design
   - Performance considerations

2. **Development Phase**
   - Custom theme development
   - Plugin creation when needed
   - Testing across devices

3. **Optimization Phase**
   - Performance testing
   - Security auditing
   - SEO implementation

4. **Deployment Phase**
   - Staging environment testing
   - Production deployment
   - Monitoring and maintenance

## Tools and Technologies

**Development Stack:**
- **Local Development**: Local by Flywheel, XAMPP
- **Version Control**: Git with proper branching
- **Build Tools**: Webpack, Gulp for asset compilation
- **Testing**: PHPUnit for backend, Jest for frontend

**Performance Tools:**
- **GTmetrix**: Performance analysis
- **Query Monitor**: Database query optimization
- **New Relic**: Application performance monitoring

## Best Practices

1. **Code Quality**: Follow WordPress coding standards
2. **Security First**: Always sanitize and validate
3. **Performance**: Optimize from the start
4. **Maintainability**: Write clean, documented code
5. **User Experience**: Focus on end-user needs

## Conclusion

WordPress development goes far beyond installing themes and plugins. With proper techniques and best practices, you can create powerful, scalable, and secure web applications that compete with any custom solution.

The key is understanding WordPress as a robust framework, not just a blogging platform.`,
    category: "WordPress",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "UI/UX Design Principles for Developers",
    excerpt: "Essential design principles every developer should know. Learn how to create intuitive interfaces, improve user experience, and bridge the gap between design and development.",
    content: `As a developer who also works in UI/UX design, I've learned that understanding design principles is crucial for creating successful web applications.

## Why Developers Should Learn Design

Many developers focus solely on functionality, but great user experience requires understanding both technical implementation and design principles.

## Core Design Principles

### 1. Visual Hierarchy
Guiding users through your interface:
- **Typography**: Use font sizes and weights strategically
- **Color**: Create contrast to highlight important elements
- **Spacing**: Use whitespace to group related content
- **Layout**: Position elements to create natural reading flow

### 2. Consistency
Creating predictable user experiences:
- **Design Systems**: Establish reusable components
- **Patterns**: Use consistent interaction patterns
- **Branding**: Maintain visual consistency throughout
- **Behavior**: Ensure similar elements behave similarly

### 3. Accessibility
Designing for all users:
- **Color Contrast**: Meet WCAG guidelines
- **Keyboard Navigation**: Ensure full keyboard accessibility
- **Screen Readers**: Proper semantic HTML and ARIA labels
- **Responsive Design**: Work across all devices and screen sizes

## Design Process I Follow

### 1. Research Phase
- **User Research**: Understanding target audience
- **Competitive Analysis**: Learning from existing solutions
- **Requirements Gathering**: Defining project scope
- **User Personas**: Creating detailed user profiles

### 2. Design Phase
- **Wireframing**: Low-fidelity layout planning
- **Prototyping**: Interactive mockups for testing
- **Visual Design**: High-fidelity designs with branding
- **Design Systems**: Creating reusable components

### 3. Testing Phase
- **Usability Testing**: Observing real users
- **A/B Testing**: Comparing different approaches
- **Accessibility Testing**: Ensuring inclusive design
- **Performance Testing**: Optimizing for speed

## Tools I Use

**Design Tools:**
- **Figma**: Collaborative design and prototyping
- **Adobe XD**: UI/UX design and wireframing
- **Sketch**: Mac-based design tool
- **InVision**: Prototyping and collaboration

**Development Tools:**
- **Storybook**: Component documentation
- **Chrome DevTools**: Design debugging
- **Accessibility Insights**: Accessibility testing
- **Lighthouse**: Performance and accessibility auditing

## Common Design Mistakes Developers Make

1. **Ignoring Typography**: Using default fonts and sizes
2. **Poor Color Choices**: Insufficient contrast or too many colors
3. **Cluttered Interfaces**: Not using enough whitespace
4. **Inconsistent Patterns**: Different styles for similar elements
5. **Mobile Afterthought**: Not designing mobile-first

## Practical Implementation Tips

### CSS Best Practices
Use consistent spacing scales and typography hierarchy:
- Define CSS custom properties for spacing
- Establish clear font size relationships
- Use semantic HTML elements
- Implement consistent color schemes

### Component Design
- Create reusable UI components
- Establish consistent states (hover, active, disabled)
- Use design tokens for colors, spacing, typography
- Implement proper loading and error states

## Real Project Examples

In my UI/UX work at Logique and other projects:

**E-commerce Platform:**
- Simplified checkout process (reduced abandonment by 30%)
- Improved product filtering and search
- Mobile-first responsive design
- Accessibility compliance (WCAG 2.1 AA)

**Dashboard Application:**
- Information hierarchy for complex data
- Progressive disclosure for advanced features
- Dark mode implementation
- Customizable user preferences

## Measuring Success

**Key Metrics:**
- **User Engagement**: Time on site, pages per session
- **Conversion Rates**: Goal completion rates
- **Usability Metrics**: Task completion time, error rates
- **Accessibility Scores**: Lighthouse accessibility audit

## Conclusion

Good design isn't just about making things look pretty—it's about creating intuitive, accessible, and effective user experiences. As developers, understanding design principles helps us build better products and collaborate more effectively with designers.

Start with the basics: typography, color, spacing, and consistency. These fundamentals will dramatically improve your applications' user experience.`,
    category: "UI/UX Design",
    date: "2024-01-05",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
  }
];

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => setSelectedPost(null)}
            className="mb-6 hover:bg-gray-100"
          >
            ← Back to Blog
          </Button>
          
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="mb-6">
              <Badge className="mb-4">{selectedPost.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {selectedPost.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.match(/^\d+\./)) {
                  return (
                    <p key={index} className="ml-6 mb-2 text-gray-700">
                      {paragraph}
                    </p>
                  );
                }
                if (paragraph.trim() !== '') {
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
            
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Enjoyed this article?</h3>
              <p className="text-gray-600 mb-4">
                If you found this helpful, consider supporting my work or sharing it with others!
              </p>
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Support My Work
                </Button>
                <Button variant="outline">
                  Share Article
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights from my journey as a Data Scientist, WordPress & Frontend Developer. 
            Sharing practical knowledge, tutorials, and experiences from real projects.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 
                  'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-red-500" size={20} />
                    <Badge variant="secondary" className="bg-red-100 text-red-700">Featured</Badge>
                    <Badge>{filteredPosts[0].category}</Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => setSelectedPost(filteredPosts[0])}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.slice(1).map((post) => (
            <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPost(post)}
                    className="group-hover:bg-blue-100 group-hover:text-blue-600"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found matching your search criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with My Latest Posts</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get notified when I publish new articles about web development, data science, and UI/UX design. 
                No spam, just quality content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}