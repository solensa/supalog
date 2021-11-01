import { qb1QuesArr, qb5QuesArr } from "./Data.js";

const convertBase = (str, fromBase, toBase) => {
  const DIGITS =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const add = (x, y, base) => {
    let z = [];
    const n = Math.max(x.length, y.length);
    let carry = 0;
    let i = 0;
    while (i < n || carry) {
      const xi = i < x.length ? x[i] : 0;
      const yi = i < y.length ? y[i] : 0;
      const zi = carry + xi + yi;
      z.push(zi % base);
      carry = Math.floor(zi / base);
      i++;
    }
    return z;
  };

  const multiplyByNumber = (num, x, base) => {
    if (num < 0) return null;
    if (num === 0) return [];

    let result = [];
    let power = x;
    while (true) {
      num & 1 && (result = add(result, power, base));
      num = num >> 1;
      if (num === 0) break;
      power = add(power, power, base);
    }

    return result;
  };

  const parseToDigitsArray = (str, base) => {
    const digits = str.split("");
    let arr = [];
    for (let i = digits.length - 1; i >= 0; i--) {
      const n = DIGITS.indexOf(digits[i]);
      if (n === -1) return null;
      arr.push(n);
    }
    return arr;
  };

  const digits = parseToDigitsArray(str, fromBase);
  if (digits === null) return null;

  let outArray = [];
  let power = [1];
  for (let i = 0; i < digits.length; i++) {
    digits[i] &&
      (outArray = add(
        outArray,
        multiplyByNumber(digits[i], power, toBase),
        toBase
      ));
    power = multiplyByNumber(fromBase, power, toBase);
  }

  let out = "";
  for (let i = outArray.length - 1; i >= 0; i--) out += DIGITS[outArray[i]];

  return out;
};

export const convertToBase62 = (base4Str) => {
  return convertBase(base4Str, 4, 62);
};
export const convertToBase4 = (base62Str) => {
  return convertBase(base62Str, 62, 4);
};

export const padWithZeroes = (number, length) => {
  var my_string = "" + number;
  while (my_string.length < length) {
    my_string = "0" + my_string;
  }
  return my_string;
};

export const returnUrlDataForBank = (dataNum) => {
  let results = returnEmptyArrFor(dataNum);

  if (!window.location.hash.includes("=")) {
    return results;
  }
  let paramsObj = breakUrlIntoObj();
  let num;
  if (paramsObj["qb" + dataNum]) {
    num = convertToBase4(paramsObj["qb" + dataNum]);
  } else {
    num = convertToBase4(paramsObj["qc" + dataNum]);
  }
  num = padWithZeroes(num, results.length);

  for (var i = 0; i < results.length; i++) {
    results[i] = parseInt(num[i]);
  }
  return results;
};

// Function that returns an array of the number banks present in the URL.
// e.g. http://localhost:3000/supalog#/results?qb1=lG&qb2=iG
// [1,2]
export const returnUrlBanksArr = () => {
  if (!window.location.hash.includes("=")) {
    return;
  }
  let paramsObj = breakUrlIntoObj();
  let banksArr = [];
  let keys = Object.keys(paramsObj);
  for (let i = 0; i < keys.length; i++) {
    banksArr.push(parseInt(keys[i].replace(/^\D+/g, "")));
  }
  return banksArr;
};

// need to manually give each scenario... as eval from the import of qb5QuesArr doesn't work
export const returnEmptyArrFor = (qBankNum) => {
  let results = [];
  if (qBankNum === 1) {
    for (let i = 0; i < qb1QuesArr.length; i++) {
      results.push(0);
    }
  }
  if (qBankNum === 5) {
    for (let i = 0; i < qb5QuesArr.length; i++) {
      results.push(0);
    }
  }
  return results;
};

export const returnUrlStr = () => {
  let hash = window.location.hash.substr(1).split("?")[1];
  return hash;
};

// export const returnUrlStrForValidation = (id) => {
//   let paramsObj = breakUrlIntoObj();
//   paramsObj["qa" + id] = "~VAL";
//   // console.log(serialize(paramsObj));

//   return serialize(paramsObj);
// };

// returns the elements of a URL into a key value dictionary
export const breakUrlIntoObj = () => {
  let paramsObj = {};
  if (window.location.href.indexOf("?") !== -1) {
    let urlStr = window.location.hash.substr(1).split("?")[1];
    paramsObj = urlStr.split("&").reduce(function (res, item) {
      let parts = item.split("=");
      res[parts[0]] = parts[1];
      return res;
    }, {});
  }

  return paramsObj;
};

export const convertObjToUrl = (obj) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export const convertStrToArr = (str) => {
  let result = str.split("");
  for (let i = 0; i < result.length; i++) {
    result[i] = parseInt(result[i]);
  }
  return result;
};

export const sendEmailToLm = (url) => {
  console.log(url);
  var titleStr = "Validate my Supervisor Exp. Log results";
  var bodyStr =
    "Instructions: Send this to you Line Manager who will give their review of you against the framework. %0D%0A %0D%0A Hi %0D%0A %0D%0A Could you please rate me against the Supervisor capability framework by following the link below. Once this is done, we can compare your results against mine and agree a final score. %0D%0A %0D%0A This will help me create a development plan. %0D%0A %0D%0A";
  bodyStr += encodeURIComponent(url);
  sendEmail(titleStr, bodyStr);
};

export const sendEmailToSupervisor = (url) => {
  console.log(url);
  var titleStr = "Let's run through and finalise the Supervisor Exp. Log";
  var bodyStr =
    "Instructions: Arrange time with your supervisor to run through the link below. This will show where your, and your supervisors' ratings differ, giving an opportunity to discuss any differences. Agree on a final rating and complete as before. %0D%0A %0D%0A Hi %0D%0A %0D%0A Let's run through the results and talk through your development goals. %0D%0A %0D%0A";
  bodyStr += encodeURIComponent(url);
  sendEmail(titleStr, bodyStr);
};

export const sendEmailToSave = (url) => {
  console.log(url);
  var titleStr = "Saved Supalog Dashboard URL";
  var bodyStr = "Here's a link back to your dashboard: %0D%0A %0D%0A";
  bodyStr += encodeURIComponent(url);
  sendEmail(titleStr, bodyStr);
};

const sendEmail = (title, body) => {
  var titleStr = title;
  var bodyStr = body;
  window.open(
    "mailto:yourLineManagersEmail@laingorourke.com?cc=sdp@laingorourke.com&subject=" +
      titleStr +
      "&body=" +
      bodyStr
  );

  // var outlookApp = new ActiveXObject("Outlook.Application");
  // var nameSpace = outlookApp.getNameSpace("MAPI");
  // mailFolder = nameSpace.getDefaultFolder(6);
  // mailItem = mailFolder.Items.add('IPM.Note.FormA');
  // mailItem.Subject = eSubject;
  // mailItem.To = "me@me.com";
  // mailItem.HTMLBody = eBody;
  // mailItem.display(0);
};

export const getBankStrCodeFromId = (id) => {
  let bankStrCode = "";
  if (id === 1) {
    bankStrCode = "lmgt";
  } else if (id === 5) {
    bankStrCode = "hsm";
  }
  return bankStrCode;
};

// export const getKeyByValue = (object, value) => {
//   return Object.keys(object).find((key) => object[key] === value);
// };

//qBank handleclick
export const handleQBankCompletionClick = (
  id,
  results,
  qBankBeingValidated,
  qBankBeingFinalised,
  history
) => {
  let isFormComplete = true;
  for (let i = 0; i < results.length; i++) {
    if (results[i] < 0) {
      isFormComplete = false;
    }
  }
  // console.log(results);
  if (!isFormComplete) {
    alert("You haven't answered all the questions!");
    return;
  }

  let x = convertToBase62(results.join(""));
  let paramsObj = breakUrlIntoObj();

  // Validation route
  if (qBankBeingValidated > 0) {
    console.log("Finished being validated");
    paramsObj["qa" + id] = x;
    paramsObj["FINALISE"] = id;
    delete paramsObj["VALIDATE"];
    sendEmailToSupervisor(
      window.location.origin +
        window.location.pathname +
        "#/" +
        getBankStrCodeFromId(id) +
        "?" +
        convertObjToUrl(paramsObj)
    );
  }
  // Finalisation route
  else if (qBankBeingFinalised > 0) {
    console.log("Finished being finalised");
    paramsObj["qc" + id] = x;
    delete paramsObj["qa" + id];
    delete paramsObj["qb" + id];
    delete paramsObj["FINALISE"];
    sendEmailToSave(
      window.location.origin +
        window.location.pathname +
        "#/results?" +
        convertObjToUrl(paramsObj)
    );

    history.push({
      pathname: "/results",
      search: "?" + convertObjToUrl(paramsObj),
    });
  }
  // Starting / Updating route
  else {
    console.log("Finished first entry of data");
    let paramsObj = breakUrlIntoObj();
    paramsObj["qb" + id] = x;
    delete paramsObj["qc" + id];
    delete paramsObj["UPDATE"];
    console.log(paramsObj);
    history.push({
      pathname: "/results",
      search: "?" + convertObjToUrl(paramsObj),
    });
  }
};
