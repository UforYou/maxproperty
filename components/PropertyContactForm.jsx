"use client";
import { useEffect } from "react";
import { useActionState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import addMessage from "@/app/actions/addMessage";
import SubmitMessageButton from "./SubmitMessageButton";

const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();

  const [state, formAction] = useActionState(addMessage, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.submitted) toast.success("You are fucked");
  }, [state]);

  if (state.submitted) {
    return (
      <p className="text-green-500 mb-4">
        Your message has been sent to the property fucker
      </p>
    );
  }
  return (
    session && (
      <div className="bg-white p-6 w-100 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
        <form action={formAction}>
          <input
            type="hidden"
            id="property"
            name="property"
            defaultValue={property._id}
          />
          <input
            type="hidden"
            id="recipient"
            name="recipient"
            defaultValue={property.owner}
          />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
              id="body"
              name="body"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <SubmitMessageButton />
          </div>
        </form>
      </div>
    )
  );
};

export default PropertyContactForm;
