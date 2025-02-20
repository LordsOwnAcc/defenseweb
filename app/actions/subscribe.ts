"use server"

import { Resend } from "resend"

const resendApiKey = new Resend( "re_ac9seXdw_DdYYVkBJDiEF8aPTGb1nnFna" )





export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address" };
  }

  try {
    const data = await resendApiKey.emails.send({
      from: "onboarding@resend.dev",
      to: "sumity12019@gmail.com",
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
    });

    console.log("Email sent successfully:", data);
    return { success: true, message: "Subscription successful!" };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: error.message,
    };
  }
}
