export namespace JsonStorage {
    function createFile(filePath: string, content?: string): Promise<void>;
    function deleteFile(filePath: string): Promise<void>;
    function copyFile(sourcePath: string, destinationPath: string): Promise<void>;
    function fileExists(filePath: string): Promise<boolean>;
    function readFile(filePath: string): Promise<any>;
    function writeFile(filePath: string, content?: string, overwrite?: boolean): Promise<void>;
    function fileStats(filePath: string): Promise<any>;
    function createFolder(folderPath: string): Promise<void>;
    function deleteFolder(folderPath: string): Promise<void>;
    function copyFolder(sourcePath: string, destinationPath: string): Promise<void>;
    function readFolder(folderPath: string): Promise<any>;
    function folderExists(folderPath: string): Promise<boolean>;
}
