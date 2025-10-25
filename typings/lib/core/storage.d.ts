export function SetStorage(filePath: string): Promise<boolean>;
export let Storage: {
    ReadFile: (filePath: string) => Promise<any>;
    WriteFile: (filePath: string, data: any) => Promise<boolean>;
    EnsureFolder: (folderPath: string) => Promise<boolean>;
    DeleteFile: (filePath: string) => Promise<boolean>;
    DeleteFolder: (folderPath: string) => Promise<boolean>;
    Exists: (path: string) => Promise<boolean>;
    GetFileStats: (path: string) => Promise<any>;
};
