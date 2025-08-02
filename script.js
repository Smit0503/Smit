async function saveNote() {
  const password = document.getElementById("password").value;
  const noteId = document.getElementById("noteId").value;
  const plainText = document.getElementById("note").value;

  if (!password || !noteId) {
    alert("Enter password and note ID");
    return;
  }

  const encrypted = CryptoJS.AES.encrypt(plainText, password).toString();

  await db.collection("notes").doc(noteId).set({
    data: encrypted,
    timestamp: new Date()
  });

  alert("Note saved securely in cloud!");
}

async function loadNote() {
  const password = document.getElementById("password").value;
  const noteId = document.getElementById("noteId").value;

  if (!password || !noteId) {
    alert("Enter password and note ID");
    return;
  }

  const doc = await db.collection("notes").doc(noteId).get();
  if (!doc.exists) {
    alert("No such note!");
    return;
  }

  try {
    const encrypted = doc.data().data;
    const decrypted = CryptoJS.AES.decrypt(encrypted, password).toString(CryptoJS.enc.Utf8);
    if (!decrypted) throw new Error("Decryption failed");
    document.getElementById("note").value = decrypted;
  } catch (e) {
    alert("Wrong password or corrupt note.");
  }
}
