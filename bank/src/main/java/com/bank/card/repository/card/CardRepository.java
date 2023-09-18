package com.bank.card.repository.card;

import com.bank.card.entity.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Integer>, CardRepositoryCustom {
}
