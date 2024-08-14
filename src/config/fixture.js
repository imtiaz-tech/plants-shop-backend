import Users from "../models/users";

const fixture = async () => {
  const adminUser = await Users.findOne({ userType: "admin" });
  if (!adminUser) {
    await Users.create({
      name: "superadmin",
      email: "admin@planshop.com",
      password: "123",
      userType: "admin",
    });
  }
};

export default fixture;
