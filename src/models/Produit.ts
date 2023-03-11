export interface Produit {
    id: number,
    description: string,
    prixAchat?: number,
    prixVente: number,
    quantiteStock?: number,
    typeProduit: number,
    urlPicture: string
}