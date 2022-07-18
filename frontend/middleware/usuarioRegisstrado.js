export default function ({ store, redirect }) {
  if (store.state.authentic !== "Usuario Registrado ") {
    return redirect("/login");
  }
}
