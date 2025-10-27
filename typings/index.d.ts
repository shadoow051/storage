import { version } from "./lib/constants/version.js";
import { StorageType } from "./lib/constants/storage_type.js";
export { version, StorageType };
import { StorageManager } from "./lib/core/storage_manager.js";
import { JsonStorage } from "./lib/core/json_storage.js";
export { StorageManager, JsonStorage };
declare const _default: {
    version: any;
    StorageType: {
        Json: string;
        Custom: string;
    };
    StorageManager: typeof StorageManager;
    JsonStorage: {
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
};
export default _default;
