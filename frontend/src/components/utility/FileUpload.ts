// import * as fs from "fs";
//
// // for nextJS backend
//
// export const handlePictureUpload = async (file) => {
//   const extension = file.image.name.split(".").pop();
//   const fileName = `${file.name}.${extension}`;
//
//   const stream = fs.createWriteStream(`public/images/${fileName}`);
//   const bufferedImage = await file.image.arrayBuffer();
//
//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error("Saving image failed.");
//     }
//   });
//
//   file.image = `/images/${fileName}`;
// };
