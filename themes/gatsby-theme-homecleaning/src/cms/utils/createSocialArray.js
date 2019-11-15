/* eslint-disable @typescript-eslint/explicit-function-return-type */

function createSocialArray(platformsArray, socialDataArray) {
  const socialArray = [];
  platformsArray.forEach(item => {
    const { platform } = item;
    const socialData = socialDataArray.find(obj => obj.platform === platform);
    if (socialData) {
      socialArray.push(socialData);
    }
  });
  return socialArray;
}

export default createSocialArray;
