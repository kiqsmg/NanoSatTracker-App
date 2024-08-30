import { Account, Client } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.nanosattacker',
    projectId: '66d0a63d0036862cfc35',
    databaseId: '66d0a7c4001771356704',
    userCollectionId: '66d0a7f8002dc24a2445',
    videoCollectionId: '66d0a817001fb99932bd',
    storageId: '66d0b139000890df5276',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform)

    const account = new Account(client);

// Register User
export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}