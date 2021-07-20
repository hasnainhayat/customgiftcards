export const editCard = (card) => {
    return {
      type: "editCard",
      payload: {
        card: card,
        
      },
    };
  };