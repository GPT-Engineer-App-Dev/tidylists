import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">About Our Todo App</CardTitle>
        </CardHeader>
        <CardContent>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
