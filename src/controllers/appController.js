const appServices = require("../services/appServices");

// *************************************************************************
module.exports = {
    // **********************Donation auth***********************************
    testEmail: async (req, res) => {
        let data = req.body;
        try {
            let emailResult = await appServices.sendEmail("Email are working fine.");
            return res.status(201).json({
                error: false,
                data: emailResult,
                msg: "Email is working fine.",
            });
        } catch (error) {
            return res.status(201).json({
                error: true,
                data: error.message,
                msg: "Email is not working fine.",
            });
        }
    },
}