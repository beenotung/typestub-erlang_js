import {Erlang} from "./Erlang";

export type CompressLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function term_to_binary(term, compressed: boolean | CompressLevel = true) {
  return new Promise((resolve, reject) => {
    Erlang.term_to_binary(term, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    }, compressed);
  });
}

export function binary_to_term(data) {
  return new Promise((resolve, reject) => {
    Erlang.binary_to_term(data, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
