//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Imports
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Json Storage
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

const JsonStorage = {
  /**
   * @param {string} relativePath
   * @param {string} callerDirname
   */
  GetDirname: function (relativePath, callerDirname) {
    try {
      const __dirname = dirname(fileURLToPath(callerDirname));
      const result = resolve(__dirname, relativePath);
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  /**
   * @param {string} filePath
   */
  ReadFile: async function (filePath) {
    try {
      const data = await fs.readFile(filePath, "utf-8");
      return data;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  /**
   * @param {string} filePath
   * @param {any} data
   */
  WriteFile: async function (filePath, data) {
    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  /**
   * @param {string} folderPath
   */
  EnsureFolder: async function (folderPath) {
    try {
      await fs.mkdir(folderPath, { recursive: true });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  /**
   * @param {string} filePath
   */
  DeleteFile: async function (filePath) {
    try {
      await fs.unlink(filePath);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  /**
   * @param {string} folderPath
   */
  DeleteFolder: async function (folderPath) {
    try {
      await fs.rm(folderPath, { recursive: true, force: true });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  /**
   * @param {string} path
   */
  Exists: async function (path) {
    try {
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * @param {string} path
   */
  GetFileStats: async function (path) {
    try {
      const stats = await fs.stat(path);
      return stats;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};

//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
//region # Exports
//≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

export { JsonStorage };
