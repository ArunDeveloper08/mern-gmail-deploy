import Email from "../model/email.js";

export const saveSentEmails = async (req, res) => {
  try {
    const email = new Email(req.body);
    email.save();
    res.status(200).json("email save successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getEmails = async (req, res) => {
  try {
    let emails;
    if (req.params.type === "bin") {
      emails = await Email.find({ bin: true });
    } else if (req.params.type === "allmail") {
      emails = await Email.find({});
    } else if (req.params.type === "starred") {
      emails = await Email.find({ starred: true, bin: false });
    } else {
      emails = await Email.find({ type: req.params.type });
    }
    return res.status(201).json(emails);
  } catch (error) {
     res.status(500).json(error.message);
  }
};


export const moveEmailstoBin = async (req, res) => {
  try {
    await Email.updateMany(
      { _id: { $in: req.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return res.status(200).json("email deleted successfully");
  } catch (error) {
    console.log("move to bin error",error.message);
    res.status(500).json(error.message);
  }
};

export const toggleStarredEmails = async (req, res) => {
  try {
    await Email.updateOne(
      { _id: req.body.id },
      { $set: { starred: req.body.value } }
    );
    return res.status(200).send("email is starred mark");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
