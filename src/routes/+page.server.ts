import * as Yup from 'yup';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
    },
};
