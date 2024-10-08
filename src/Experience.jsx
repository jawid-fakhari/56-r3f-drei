import { OrbitControls, TransformControls } from "@react-three/drei"
import { useRef } from "react"

export default function Experience() {
    const cubeRef = useRef()
    return <>
        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <mesh position-x={- 2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
        {/* aggiungiamo gizmo axes con TransformControls che by default è al centro scena quindi non al centro del oggetto(2 soluzioni: spostare position nel transformcontrols tag come parent. Oppure usare useRef, e passare come object al tranformControls), poi quando cerchiamo di muovere un asse si muove tutto. le soluzioni sono(soluzione: aggiungere makeDefault al orbitControl) */}
        <mesh ref={cubeRef} position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        {/* si puo aggiungere mode= "scale" /"rotaion" */}
        <TransformControls object={cubeRef} mode="translate" />

        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}