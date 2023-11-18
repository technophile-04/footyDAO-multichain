import { NextPage } from "next";

const MyProfile: NextPage = () => {
  return (
    <div className="flex items-center justify-center p-8 gap-4 flex-wrap">
      <div className="card w-[26rem] bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl font-bold">My Profile</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="spacey-y-2">
              <p className="m-0 font-medium text-lg">Name</p>
              <p className="m-0">John Doe</p>
              <p className="m-0 font-medium text-lg">Email</p>
              <p className="m-0">shiv@gamil.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
