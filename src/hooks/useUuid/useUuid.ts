// It returns a unique ID to be used
// in the process of creating new question.

const useUuid = () => {
  let uuidPattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

  return uuidPattern.replace(/[xy]/g, (char) => {
    let randomNumber = (Math.random() * 16) | 0,
      id = char == 'x' ? randomNumber : (randomNumber & 0x3) | 0x8;
    let questionId = id.toString(16);
    return questionId;
  });
};

export default useUuid;
