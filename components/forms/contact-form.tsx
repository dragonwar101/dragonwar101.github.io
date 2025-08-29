"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const storeModal = useModalStore();

  // const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formLink = process.env.NEXT_PUBLIC_GOOGLE_FORM_LINK;
      const fieldIdName = process.env.NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_NAME;
      const fieldIdEmail = process.env.NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_EMAIL;
      const fieldIdMessage = process.env.NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_MESSAGE;
      const fieldIdSocial = process.env.NEXT_PUBLIC_GOOGLE_FORM_FIELD_ID_SOCIAL;

      if (!formLink || !fieldIdName || !fieldIdEmail || !fieldIdMessage || !fieldIdSocial) {
        storeModal.onOpen({
          title: "Configuration needed",
          description: "Contact form is not configured. Please set NEXT_PUBLIC_GOOGLE_FORM_* env vars.",
          icon: Icons.warning,
        });
        return;
      }

      const url = `${formLink}/formResponse?${fieldIdName}=${encodeURIComponent(
        values.name
      )}&${fieldIdEmail}=${encodeURIComponent(values.email)}&${fieldIdMessage}=${encodeURIComponent(
        values.message
      )}&${fieldIdSocial}=${encodeURIComponent(values.social || "")}`;

      // Google Forms accepts GET to /formResponse for submissions
      await fetch(url, { method: "GET", mode: "no-cors" });

      form.reset();

      storeModal.onOpen({
        title: "Thank you!",
        description:
          "Your message has been received! I appreciate your contact and will get back to you shortly.",
        icon: Icons.successAnimated,
      });
    } catch (err) {
      console.log("Err!", err);
      storeModal.onOpen({
        title: "Something went wrong",
        description: "Please try again later or reach me on social links.",
        icon: Icons.warning,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Social (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Link for social account" {...field} />
              </FormControl>
              {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
