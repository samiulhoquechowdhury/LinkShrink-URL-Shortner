import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";

const Login = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to you account if you already have one.
          </CardDescription>
        </CardHeader>
        <CardContent classname="space-y-2">
          <div className="space-y-1">
            <Input name="email" type="email" placeholder="Enter Email" />
          </div>
          <div className="space-y-1 mt-1">
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>{false ? <BeatLoader size={10} /> : "Login"}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
