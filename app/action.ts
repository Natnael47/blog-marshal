"use server";
import { parseWithZod } from "@conform-to/zod";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./utils/db";
import { siteSchema } from "./utils/zodSchemas";

export async function CreateSiteAction(prevState: any, formData: FormData) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const submission = parseWithZod(formData, {
    schema: siteSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const response = await prisma.site.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      subdirectory: submission.value.subdirectory,
      userId: user.id,
    },
  });
  return redirect("/api/dashboard/sites");
}
