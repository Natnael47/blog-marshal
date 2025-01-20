import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="max-w-[460px]">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your Site Here. Click the Button Below Once Done
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-6">
            <div className="grid gap-3">
              <Label>Site Name</Label>
              <Input placeholder="Site Name" />
            </div>
            <div className="grid gap-3">
              <Label>Subdirectory</Label>
              <Input placeholder="Subdirectory" />
            </div>
            <div className="grid gap-3">
              <Label>Description</Label>
              <Textarea placeholder="Small Description for your Site" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
