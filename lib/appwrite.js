import { Account, Client, ID } from "react-native-appwrite";
export const appWriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.maha.me",
  projectId: "675592f400281d7a8e7e",
  databaseId: "6755949e0035f4a32927",
  userCollectionId: "675594b300103f5eb6ae",
  videoCollectionId: "675594c90017d95ee904",
  storageBucketId: "6755938400299311cd0a",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appWriteConfig.projectId) // Your project ID
  .setPlatform(appWriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

// Register User
export const createUser = (email, password, name) => {
  account.create(ID.unique(), email, password, name).then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
