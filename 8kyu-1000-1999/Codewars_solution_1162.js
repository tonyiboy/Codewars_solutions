// Total pressure calculation

function solution(M1, M2, m1, m2, V, T) {
    M1 = m1 * 0.001/M1;
M2 = m2 * 0.001/M2;
T = T + 273.15;
let R = 0.082;

return (((M1 + M2) * R * T) / V) * 1000;
}