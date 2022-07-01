class Base64 {
  encode(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  //Não houve necessidade ainda de se implementar um decode
  decode(base64: string) {
    return;
  }

  createBlob(base64: string) {
    const type = base64.split(";").shift()?.split("data:").pop();
    const data = base64.split("64,")[1];

    const byteCharacters = atob(data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type });

    return blob;
  }

  //Abrir base64 numa nova url
  createObjectURL(base64: string) {
    const file = this.createBlob(base64);
    return URL.createObjectURL(file);
  }
}

export default new Base64();
