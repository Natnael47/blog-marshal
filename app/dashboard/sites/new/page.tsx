"use client";
import { CreateSiteAction } from "@/app/action";
import { siteSchema } from "@/app/utils/zodSchemas";
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
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";

export default function NewSiteRoute() {
  const [lastResult, action] = useActionState(CreateSiteAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: siteSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <Card className="max-w-[460px]">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your Site Here. Click the Button Below Once Done
          </CardDescription>
        </CardHeader>
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
          <CardContent>
            <div className="grid gap-3">
              <Label>Site Name</Label>
              <Input
                name={fields.name.name}
                key={fields.name.key}
                defaultValue={fields.name.initialValue}
                placeholder="Name of your site"
              />
              <p className="text-red-500 text-sm">{fields.name.errors}</p>
            </div>

            <div className="grid gap-3">
              <Label>SubDirectory</Label>
              <Input
                name={fields.subdirectory.name}
                key={fields.subdirectory.key}
                defaultValue={fields.subdirectory.initialValue}
                placeholder="SubDirectory"
              />

              <p className="text-sm text-red-500">
                {fields.subdirectory.errors}
              </p>
            </div>

            <div className="grid gap-3">
              <Label>Description</Label>
              <Textarea
                name={fields.description.name}
                key={fields.description.key}
                defaultValue={fields.description.initialValue}
                placeholder="Describe your site"
              />
              <p className="text-sm text-red-500">
                {fields.description.errors}
              </p>
            </div>
          </CardContent>

          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
