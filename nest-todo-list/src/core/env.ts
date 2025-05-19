/**
 * 基础类型接口
 */
export type BaseType = boolean | number | string | undefined | null;

/**
 * 格式化环境变量
 * @param key 环境变量的键值
 * @param defaultValue 默认值
 * @param callback 格式化函数
 */
function formatValue<T extends BaseType = string>(
  key: string,
  defaultValue: T,
  callback?: (value: string) => T,
): T {
  const value: string | undefined = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  if (!callback) {
    return value as unknown as T;
  }
  return callback(value);
}

export function env(key: string, defaultValue: string = '') {
  return formatValue(key, defaultValue);
}

export function envNumber(key: string, defaultValue: number = 0) {
  return formatValue(key, defaultValue, (value) => {
    try {
      return Number(value);
    } catch (error) {
      throw new Error(`${key} environment variable is not a number`);
    }
  });
}

export function envBoolean(key: string, defaultValue: boolean = false) {
  return formatValue(key, defaultValue, (value) => {
    try {
      return Boolean(JSON.parse(value));
    } catch (error) {
      throw new Error(`${key} environment variable is not a boolean`);
    }
  });
}
