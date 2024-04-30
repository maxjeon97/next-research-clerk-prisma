import NavBar from "@/components/NavBar";
import { auth } from "@clerk/nextjs/server";
import { uuid } from 'uuidv4';
import { PropertyObject } from "@/types/types";
import Property from "@/components/Property";
import AddPropertyForm from "@/components/AddPropertyForm"


const API_BASE_URL = "https://angry-meals-rescue.loca.lt/api";

/**
 * Properties component
 *
 * Renders list of properties for users to look through
 *
 * If admin, also have a button that allows you to add a property
 */

export default async function Properties() {
  const { userId } = auth();

  const userResponse = await fetch(`${API_BASE_URL}/users/${userId}`);
  const userData = await userResponse.json();
  const isAdmin = userData.user.isAdmin;

  const propsResponse = await fetch(`${API_BASE_URL}/properties`);
  const propsData = await propsResponse.json();

  return (
    <div>
      <NavBar />
      <div className="Properties">
        {propsData.map((p: PropertyObject) => <Property key={uuid()} property={p} />)}
      </div>
        {isAdmin && <AddPropertyForm />}
    </div>
  );
}