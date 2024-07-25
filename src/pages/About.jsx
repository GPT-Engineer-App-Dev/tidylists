import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">About Our Todo App</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="mb-6">
            <p className="mb-4">
              Welcome to our Todo App! This simple yet effective application helps you manage your tasks and stay organized.
            </p>
            <p className="mb-4">
              Key features:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Add new tasks quickly and easily</li>
              <li>Mark tasks as completed</li>
              <li>Delete tasks you no longer need</li>
              <li>Clean and intuitive user interface</li>
            </ul>
            <p>
              We hope this app helps you boost your productivity and keep track of your daily tasks. If you have any questions or feedback, please don't hesitate to contact us.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              Our mission is to provide a simple and effective tool to help people manage their tasks and improve their productivity. We believe that staying organized is key to achieving your goals and we are committed to helping you do just that.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Our Team</h2>
            <p>
              We are a small team of passionate developers and designers who are dedicated to creating high-quality applications that make your life easier. Our team is constantly working on new features and improvements to ensure that our Todo App meets your needs.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p>
              If you have any questions, feedback, or need support, please feel free to reach out to us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: support@todoapp.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Todo App Street, Productivity City, PC 12345</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
