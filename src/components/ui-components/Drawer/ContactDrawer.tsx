
import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import  { useState } from "react";
import CardBox from "src/components/shared/CardBox";
import { HiEnvelope } from "react-icons/hi2";
import ContactDrawerCode from "./Code/ContactDrawerCode";
const ContactDrawer = () => {
  const [isContact, setIsContact] = useState(false);
  const contactClose = () => setIsContact(false);
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Contact Form</h4>
          <ContactDrawerCode />
        </div>
        <Button color={"success"} onClick={() => setIsContact(true)}>
          Show Contact Form
        </Button>
        <Drawer open={isContact} onClose={contactClose} className="p-4">
          <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
          <Drawer.Items>
            <form action="#">
              <div className="mb-6 mt-3">
                <Label htmlFor="email" className="mb-2 block">
                  Your email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="subject" className="mb-2 block">
                  Subject
                </Label>
                <TextInput
                  id="subject"
                  name="subject"
                  placeholder="Let us know how we can help you"
                  className="form-control"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="message" className="mb-2 block">
                  Your message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  className="form-control-textarea"
                  placeholder="Your message..."
                  rows={4}
                />
              </div>
              <div className="mb-6">
                <Button type="submit" className="w-full " color="primary">
                  Send message
                </Button>
              </div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <a href="mailto:info@company.com" className="hover:underline">
                  info@company.com
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <a href="tel:2124567890" className="hover:underline">
                  212-456-7890
                </a>
              </p>
            </form>
          </Drawer.Items>
        </Drawer>
      </CardBox>
    </div>
  );
};

export default ContactDrawer;
