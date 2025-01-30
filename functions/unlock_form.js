export async function onRequestPost(context) {
    const body = await context.request.formData();

    const { unlock_pw, req_type } =
        Object.fromEntries(body);
    if (context.env.rsvp_form_password === unlock_pw) {
        if (req_type == 'rsvp') {
            const data = {
                success: true,
                form_url: context.env.RSVP_FORM
            };
            return Response.json(data);

        }
        const data = {
            success: true,
            form_url: context.env.SOFT_RSVP_FORM
        };
        return Response.json(data);
    } else {
        const data = {
            success: false,
        };
        return Response.json(data);
    }
}
