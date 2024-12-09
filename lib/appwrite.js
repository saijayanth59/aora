import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";
const config = {
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
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client);

// Register User
export async function createUser(email, password, name) {
  try {
    console.log("I am working");
    const newAccount = account.create(ID.unique(), email, password, name);
    if (!newAccount) throw Error;
    const avatarUrl = avatar.getInitials(name);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        id: (await newAccount).$id,
        email: email,
        username: name,
        avatar: avatarUrl,
      }
    );
    await signInUser(email, password);

    return newUser;
  } catch (error) {
    throw Error(error);
  }
}

export async function signInUser(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw Error(error);
  }
}

export async function getAccount() {
  try {
    const currentAccount = await account.get();
    // console.log(currentAccount);
    return currentAccount;
  } catch (error) {
    throw Error(error);
  }
}

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;
    // console.log(currentAccount.$id);
    const user = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("id", currentAccount.$id)]
    );

    // console.log(user);
    if (!user) throw Error;
    return user.documents[0];
  } catch (error) {
    throw Error(error);
  }
}

export async function signOut() {
  try {
    const session = await account.deleteSession("current");
    console.log(session);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
