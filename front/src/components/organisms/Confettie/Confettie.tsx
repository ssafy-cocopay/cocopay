import React, { useEffect, useRef } from "react";

import p5 from "p5"; // p5.js를 가져옵니다.

const themeCouleur = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

class Particule {
  parent: SystemeDeParticules;
  gravite: p5.Vector;
  position: p5.Vector;
  forme: number;
  etape: number;
  prise: number;
  priseFacteur: number;
  multFacteur: number;
  priseAngle: number;
  priseVitesse: number;
  velocite: p5.Vector;
  friction: number;
  taille: number;
  moitie: number;
  couleur: p5.Color;

  constructor(parent: SystemeDeParticules, p5: p5) {
    this.parent = parent;
    this.gravite = parent.gravite;
    this.reinit(p5);
    this.forme = Math.round(Math.random());
    this.etape = 0;
    this.prise = 0;
    this.priseFacteur = Math.random() * (0.02 - -0.02) + -0.02;
    this.multFacteur = Math.random() * (0.08 - 0.01) + 0.01;
    this.priseAngle = 0;
    this.priseVitesse = 0.05;
    this.friction = Math.random() * (0.98 - 0.995) + 0.995;
    this.taille = Math.round(Math.random() * (15 - 5) + 5);
    this.moitie = this.taille / 2;
    this.position = p5.createVector(
      Math.random() * (p5.width - 0) + 0,
      Math.random() * (-100 - -20) + -20
    );

    this.velocite = p5.createVector(
      Math.random() * (6 - -6) + -6,
      Math.random() * (2 - -10) + -10
    );
    this.couleur = p5.color(
      themeCouleur[Math.floor(Math.random() * themeCouleur.length)]
    );
  }

  reinit(p5: p5) {
    this.position = this.parent.position.copy();
    this.position.y = Math.random() * (-100 - -20) + -20;
    this.position.x = Math.random() * (p5.width - 0) + 0; // width 변수가 정의되어 있어야 합니다.
    this.velocite = p5.createVector(
      Math.random() * (6 - -6) + -6,
      Math.random() * (2 - -10) + -10
    );
    this.friction = Math.random() * (0.98 - 0.995) + 0.995;
    this.taille = Math.round(Math.random() * (15 - 5) + 5);
    this.moitie = this.taille / 2;
    this.couleur = p5.color(
      themeCouleur[Math.floor(Math.random() * themeCouleur.length)]
    );
  }

  dessiner(p5: p5) {
    this.etape = 0.5 + Math.sin(this.velocite.y * 20) * 0.5;
    this.prise =
      this.priseFacteur + Math.cos(this.priseAngle) * this.multFacteur;
    this.priseAngle += this.priseVitesse;
    p5.push();
    p5.translate(this.position.x, this.position.y);
    p5.rotate(this.velocite.x * 2);
    p5.scale(1, this.etape);
    p5.noStroke();
    p5.fill(this.couleur);
    if (this.forme === 0) {
      p5.rect(-this.moitie, -this.moitie, this.taille, this.taille);
    } else {
      p5.ellipse(0, 0, this.taille, this.taille);
    }
    p5.pop();
  }

  integration(p5: p5) {
    this.velocite.add(this.gravite);
    this.velocite.x += this.prise;
    this.velocite.mult(this.friction);
    this.position.add(this.velocite);
    if (this.position.y > p5.height) {
      this.reinit(p5);
    }
    if (this.position.x < 0) {
      this.reinit(p5);
    }
    if (this.position.x > p5.width + 10) {
      this.reinit(p5);
    }
  }

  rendu(p5: p5) {
    this.integration(p5);
    this.dessiner(p5);
  }
}

class SystemeDeParticules {
  position: p5.Vector;
  gravite: p5.Vector;
  friction: number;
  particules: Particule[];

  constructor(nombreMax: number, position: p5.Vector, p5: p5) {
    this.position = position.copy();
    this.gravite = p5.createVector(0, 0.1);
    this.friction = 0.98;
    this.particules = [];
    for (let i = 0; i < nombreMax; i++) {
      this.particules.push(new Particule(this, p5));
    }
  }

  rendu(p5: p5) {
    this.particules.forEach((part: Particule) => part.rendu(p5));
  }
}

const ParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let nouvelle = new p5.Vector(0, 0);
  let ancienne = new p5.Vector(0, 0);
  let confettis: SystemeDeParticules;

  const setup = (p5: p5) => {
    const canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
    // 생성된 캔버스 엘리먼트를 div 요소에 부착
    if (canvasRef.current) {
      canvas.parent(canvasRef.current);
    }
    p5.frameRate(60);
    ancienne = p5.createVector(0, 0);
    nouvelle = p5.createVector(0, 0);
    confettis = new SystemeDeParticules(
      500,
      p5.createVector(p5.width / 2, -20),
      p5
    );
  };

  const draw = (p5: p5) => {
    p5.background(p5.color("#111"));
    nouvelle.x = p5.mouseX;
    nouvelle.y = p5.mouseY;
    confettis.rendu(p5);
    ancienne.x = nouvelle.x;
    ancienne.y = nouvelle.y;
  };

  useEffect(() => {
    new p5((p: p5) => {
      p.setup = () => setup(p);
      p.draw = () => draw(p);
    });
  }, []);

  return (
    <canvas ref={canvasRef} style={{ border: "1px solid black" }}></canvas>
  );
};

export default ParticleAnimation;
