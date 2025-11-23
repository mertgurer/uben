export class FirebaseImages {
  private static BASE_URL =
    "https://firebasestorage.googleapis.com/v0/b/uben-9ca7e.firebasestorage.app/o";

  /**
   * Get the download URL for the cover image of a folder
   * @param folderId - folder name in storage
   */
  public static getCover(folderId: string): string {
    const path = `${folderId}/cover.jpg`;
    return this.buildUrl(path);
  }

  /**
   * Get download URLs for all images in a folder
   * @param folderId - folder name in storage
   * @param imageCount - number of images to fetch
   */
  public static async getImages(
    folderId: string,
    imageCount: number
  ): Promise<string[]> {
    const urls: string[] = [];

    for (let i = 0; i < imageCount; i++) {
      const path = `${folderId}/image_${i + 1}.jpg`;
      const url = this.buildUrl(path);

      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) {
          urls.push(url);
        }
      } catch (err) {
        console.warn(`Failed to fetch ${url}:`, err);
      }
    }

    return urls;
  }

  /**
   * Build the public Firebase Storage URL
   * @param path - path inside the bucket
   */
  private static buildUrl(path: string): string {
    // Encode the path for URLs (replace / with %2F)
    const encodedPath = encodeURIComponent(path);
    return `${this.BASE_URL}/${encodedPath}?alt=media`;
  }
}
