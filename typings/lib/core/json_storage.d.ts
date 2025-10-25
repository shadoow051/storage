export namespace JsonStorage {
    function GetDirname(relativePath: string, callerDirname: string): any;
    function ReadFile(filePath: string): Promise<any>;
    function WriteFile(filePath: string, data: any): Promise<boolean>;
    function EnsureFolder(folderPath: string): Promise<boolean>;
    function DeleteFile(filePath: string): Promise<boolean>;
    function DeleteFolder(folderPath: string): Promise<boolean>;
    function Exists(path: string): Promise<boolean>;
    function GetFileStats(path: string): Promise<any>;
}
