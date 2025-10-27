export class StorageManager {
    name: any;
    type: string;
    functions: {
        createFile: (filePath: string, content?: string) => Promise<void>;
        deleteFile: (filePath: string) => Promise<void>;
        copyFile: (sourcePath: string, destinationPath: string) => Promise<void>;
        fileExists: (filePath: string) => Promise<boolean>;
        readFile: (filePath: string) => Promise<any>;
        writeFile: (filePath: string, content?: string, overwrite?: boolean) => Promise<void>;
        fileStats: (filePath: string) => Promise<any>;
        createFolder: (folderPath: string) => Promise<void>;
        deleteFolder: (folderPath: string) => Promise<void>;
        copyFolder: (sourcePath: string, destinationPath: string) => Promise<void>;
        readFolder: (folderPath: string) => Promise<any>;
        folderExists: (folderPath: string) => Promise<boolean>;
    };
    setStorage(filePath: string): Promise<void>;
    setDefaultStorage(storageType: string): void;
}
