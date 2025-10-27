//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Imports
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

import fs from "fs/promises";
import path from "path";

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Json Storage
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const JsonStorage = {
  /**
   * @param {string} filePath
   * @param {string} content
   */
  createFile: async function (filePath, content = "") {
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(filePath, content);
  },
  /**
   * @param {string} filePath
   */
  deleteFile: async function (filePath) {
    await fs.rm(filePath, { force: true });
  },
  /**
   * @param {string} sourcePath
   * @param {string} destinationPath
   */
  copyFile: async function (sourcePath, destinationPath) {
    await fs.copyFile(sourcePath, destinationPath);
  },
  /**
   * @param {string} filePath
   */
  fileExists: async function (filePath) {
    try {
      await fs.access(filePath, fs.constants.F_OK);
      return true;
    } catch {
      return false;
    }
  },
  /**
   * @param {string} filePath
   */
  readFile: async function (filePath) {
    return await fs.readFile(filePath, "utf-8");
  },
  /**
   * @param {string} filePath
   * @param {string} content
   * @param {boolean} overwrite
   */
  writeFile: async function (filePath, content = "", overwrite = true) {
    const dir = path.dirname(filePath);
    await fs.mkdir(dir, { recursive: true });
    const flag = overwrite ? "w" : "wx";
    await fs.writeFile(filePath, content, { flag });
  },
  /**
   * @param {string} filePath
   */
  fileStats: async function (filePath) {
    return await fs.stat(filePath);
  },
  /**
   * @param {string} folderPath
   */
  createFolder: async function (folderPath) {
    await fs.mkdir(folderPath, { recursive: true });
  },
  /**
   * @param {string} folderPath
   */
  deleteFolder: async function (folderPath) {
    await fs.rm(folderPath, { recursive: true, force: true });
  },
  /**
   * @param {string} sourcePath
   * @param {string} destinationPath
   */
  copyFolder: async function (sourcePath, destinationPath) {
    await fs.cp(sourcePath, destinationPath, { recursive: true });
  },
  /**
   * @param {string} folderPath
   */
  readFolder: async function (folderPath) {
    return await fs.readdir(folderPath);
  },
  /**
   * @param {string} folderPath
   */
  folderExists: async function (folderPath) {
    try {
      await fs.access(folderPath, fs.constants.F_OK);
      return true;
    } catch {
      return false;
    }
  },
};

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Exports
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

export { JsonStorage };
