
export async function onRequestPost(context) {
    const body = await context.request.formData();
    const { password_accom, who, flightin, flightout, accom } =
        Object.fromEntries(body);
    console.log('Form Data:', { password_accom, who, flightin, flightout, accom });

    if (context.env.rsvp_form_password === password_accom) {
        const data = {
            success: true,
        };

        return Response.json(data);
    } else {
        const data = {
            success: false,
        };
        return Response.json(data);
    }
}
