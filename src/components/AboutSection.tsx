import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Database, Palette, Lightbulb, Target, Users, Download, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    "Data Science", "WordPress Development", "Frontend Development", "React", "Vue.js", 
    "JavaScript", "HTML5", "CSS3", "UI/UX Design", "Responsive Design", "SEO Optimization",
    "Data Analysis", "Python", "Web Performance", "User Experience"
  ];

  const experiences = [
    {
      title: "Front-End Developer",
      company: "Self-Employed",
      period: "Current",
      description: "Freelance frontend development focusing on React and Vue.js applications"
    },
    {
      title: "Freelance UI/UX Designer",
      company: "At Logique",
      period: "Recent",
      description: "Designed user interfaces and experiences for various client projects"
    },
    {
      title: "Creative Web Designer",
      company: "At Optimal",
      period: "Previous",
      description: "Created responsive web designs and improved user engagement"
    },
    {
      title: "Junior Web Developer",
      company: "Tech Ucreation",
      period: "Started Career",
      description: "Began professional journey in web development and design"
    }
  ];

  const specialties = [
    { 
      icon: Code, 
      title: "Frontend Development", 
      description: "Expert in HTML, CSS, React, Vue.js, and JavaScript, crafting responsive, high-performance websites",
      skills: ["React", "Vue.js", "JavaScript", "TypeScript", "Responsive Design"]
    },
    { 
      icon: Database, 
      title: "Data Science", 
      description: "Analyzing complex datasets to extract meaningful insights and drive data-driven decisions",
      skills: ["Python", "Data Analysis", "Statistical Modeling", "Data Visualization"]
    },
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      description: "From wireframes to prototypes, ensuring every detail enhances user experience while aligning with brand vision",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A passionate professional with 2+ years in web development and design, 
              creating impactful solutions for top brands and turning ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    My Story
                    <span className="text-2xl">🚀</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Hello! I'm Shakir Hussain, a passionate Data Scientist, WordPress & Frontend Developer 
                    with over 2 years of professional experience. I specialize in creating impactful digital 
                    solutions that blend beautiful design with powerful functionality.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    My journey began as a Junior Web Developer at Tech Ucreation, where I discovered my passion 
                    for creating user-centric digital experiences. Since then, I've worked with companies like 
                    Optimal and Logique, honing my skills in both technical development and creative design.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    What makes me different? I blend design and functionality to create impactful solutions, 
                    turning ideas into reality and delivering exceptional user experiences. Whether it's 
                    analyzing complex data sets or crafting responsive web applications, I approach every 
                    project with creativity and technical precision.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Currently available for new opportunities and collaborations, I'm always excited to work 
                    on projects that challenge me to grow and make a meaningful impact.
                  </p>
                  
                  <div className="flex gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Download size={16} className="mr-2" />
                      Download Resume
                    </Button>
                    <Button variant="outline">
                      <ExternalLink size={16} className="mr-2" />
                      View Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Experience:</span>
                      <p className="text-gray-600">2+ years professional</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Location:</span>
                      <p className="text-gray-600">Remote (Pakistan)</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Status:</span>
                      <p className="text-green-600 font-medium">Available for work</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Focus:</span>
                      <p className="text-gray-600">Data Science & Web Development</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Contact:</span>
                      <p className="text-blue-600">+92 3554545478</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Core Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specialties Section */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">What Makes Me Different?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-blue-600" size={32} />
                      </div>
                      <CardTitle className="text-xl">{specialty.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4 text-left">
                        {specialty.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {specialty.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Experience Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Professional Journey</CardTitle>
              <CardDescription className="text-center">
                My career progression and key experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Ready to Collaborate?</h3>
                <p className="text-gray-600 mb-4">
                  I'm always open to new opportunities, collaborations, and interesting conversations. 
                  Let's create something amazing together!
                </p>
                <p className="text-sm text-gray-500">
                  Available for freelance projects, full-time opportunities, and consulting work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}