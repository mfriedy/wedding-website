export async function onRequestPost(context) {
    const body = await context.request.formData();

    const { unlock_pw } =
        Object.fromEntries(body);
    if (context.env.rsvp_form_password === unlock_pw) {
        const data = {
            success: true,
            form_url: "https://docs.google.com/forms/d/e/1FAIpQLScY31ockxHDrDkN0oHRq5YgNnElAPyQf0QnNcc4U30AxYct4A/viewform?embedded=true"
        };
        return Response.json(data);
    } else {
        const data = {
            success: false,
        };
        return Response.json(data);
    }
}
