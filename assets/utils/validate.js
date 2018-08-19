/**
 * 表单验证工具类
 */
export default class Validate {
  /**
   * 判断输入值是否为空
   */
  static required(value) {
    if (typeof value === 'number') {
      value = value.toString();
    } else if (typeof value === 'boolean') {
      return !0;
    }
    return value && value.length > 0;
  }

  /**
   * 重复验证
   */
  static noDuplicate(values) {
    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (values[i] == values[j] && i != j) {
          return false;
        }
      }
    }
    return true;
  }
  
  /**
   * 验证电子邮箱格式
   */
  static email(value) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
  }
  
  /**
   * 验证手机格式
   */
  static tel(value) {
    return /^1[234578]\d{9}$/.test(value);
  }
  
  /**
   * 验证电话格式
   */
  static phone(value) {
    return /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/.test(value);
  }

  /**
   * 验证联系方式（固话&手机）
   */
  static call(value) {
    return /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/.test(value);
  }

  /**
   * 验证传真格式
   */
  static fax(value) {
    return /^(\d{3,4}-)\d{7,8}$/.test(value);
  }
  
  /**
   * 验证URL格式
   */
  static url(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }
  
  /**
   * 验证日期格式
   */
  static date(value) {
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  
  /**
   * 验证ISO类型的日期格式
   */
  static dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  
  /**
   * 验证十进制数字
   */
  static number(value) {
    return  /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
  }
  
  /**
   * 验证整数
   */
  static digits(value) {
    return /^\d+$/.test(value);
  }
  
  /**
   * 验证正整数
   */
  static amount(value) {
    return /^[1-9]\d*$/.test(value);
  }
  
  /**
   * 验证身份证号码
   */
  static idcard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
  }
  
  /**
   * 验证内容是否相同
   */
  static equalTo(value, param) {
    return value == param;
  }
  
  /**
   * 验证是否包含某个值
   */
  static contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  
  /**
   * 验证最小长度
   */
  static minlength(value, param) {
    return value.length >= param;
  }
  
  /**
   * 验证最大长度
   */
  static maxlength(value, param) {
    return value.length <= param;
  }
  
  /**
   * 验证一个长度范围[min, max]
   */
  static rangelength(value, param) {
    return (value.length >= param[0] && value.length <= param[1]);
  }
  
  /**
   * 验证最小值
   */
  static min(value, param) {
    return Number(value) >= Number(param);
  }
  
  /**
   * 验证最大值
   */
  static max(value, param) {
    return Number(value) <= Number(param);
  }

  /**
   * 验证一个值范围[min, max]
   */
  static range(value, param) {
    return (value >= param[0] && value <= param[1]);
  }
  
}
