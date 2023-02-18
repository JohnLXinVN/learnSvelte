import * as Yup from 'yup';

export const actions = {
    register: async ({ request }) => {
        const formData = await request.formData();

        console.log(formData);
        const phoneRegExp =
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

        const name = formData.get('name');
        const phoneNumber = formData.get('phoneNumber');
        const email = formData.get('email');
        const ShopName = formData.get('ShopName');
        const business = formData.get('business');
        const location = formData.get('location');

        const contactFormSchema = Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(3, 'Name must be at least 3 characters')
                .max(64, 'Name must be 64 characters or less'),
            phoneNumber: Yup.string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Phone Number is required'),
            email: Yup.string().email('Email must be a valid email address').required('Email is required').trim(),
            ShopName: Yup.string().required('Shop Name is required'),
            business: Yup.string().required('Business must be a required'),
            location: Yup.string().required('Location must be a required'),
        });

        try {
            const result = await contactFormSchema.validate(
                { name, phoneNumber, email, ShopName, business, location },
                { abortEarly: false },
            );

            console.log('result: ', result);

            return {
                success: true,
                status: 'Form is submitted',
            };
        } catch (error) {
            console.log({ error });
            const errors = error.inner.reduce((acc, err) => {
                return { ...acc, [err.path]: err.message };
            }, {});

            return {
                errors,
                name,
                phoneNumber,
                email,
                ShopName,
                business,
                location,
            };
        }
    },
};
