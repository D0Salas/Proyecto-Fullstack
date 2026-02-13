const SUPABASE_URL = "https://wsmkahaxqrfxrodeotry.supabase.co"
const SUPABASE_KEY = "sb_publishable_9a417g9G21wJ5eF3EybyLg_UuI2en_6"

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("formRegistro").addEventListener("submit", async (e) => {
        e.preventDefault()

        const email = document.getElementById("email").value
        const mensaje = document.getElementById("mensaje")

        const { data, error } = await supabaseClient
            .from("suscriptores")
            .insert([{ email: email }])

        if (error) {
            mensaje.style.color = "red"
            mensaje.textContent = "Error al registrarse."
            console.log(error)
            return
        }

        mensaje.style.color = "green"
        mensaje.textContent = "Registro exitoso!"
        e.target.reset()
    })

})
